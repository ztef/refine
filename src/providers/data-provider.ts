import type { DataProvider } from "@refinedev/core";

const API_URL = "http://localhost:3000";

const fetcher = async (url: string, options?: RequestInit) => {
    return fetch(url, {
      ...options,
      headers: {
        ...options?.headers,
        Authorization: localStorage.getItem("my_access_token"),
      },
    });
  };

export const dataProvider: DataProvider = {
    getMany: async ({ resource, ids, meta }) => {
        const params = new URLSearchParams();
    
        if (ids) {
          ids.forEach((id) => params.append("id", id));
        }
    
         
        const response = await fetcher(
              `${API_URL}/${resource}?${params.toString()}`,
        );

        if (response.status < 200 || response.status > 299) throw response;
    
        const data = await response.json();
    
        return { data };
      },

    getOne: async ({ resource, id, meta }) => {
       
        
        const response = await fetcher(
              `${API_URL}/${resource}/${id}`,
        );
    
        if (response.status < 200 || response.status > 299) throw response;
    
        const data = await response.json();
    
        return { data };
      },
      update: async ({ resource, id, variables }) => {

            let b = JSON.stringify(variables);
         
            const response = await fetcher(`${API_URL}/${resource}/${id}`, {
              method: "PATCH",
              body: JSON.stringify(variables),
              headers: {
                "Content-Type": "application/json",
                "accept": "application/json",
              },
            });
    
        if (response.status < 200 || response.status > 299) throw response;
    
        //const data = await response.json();
            const data = {}

        return { data};
      },

getList: async ({ resource, pagination, filters, sorters, meta }) => {

    interface WhereFilter {
      [key: string]: any;
    }
     
    const queryParams = {
          filter: {
            offset: 0,
            limit: 100,
            skip: 0,
            order: "",
            where: {
              additionalProp1: {}
            }
            
          }
        };
    

    if (pagination) {
      //params.append("_start", (pagination.current - 1) * pagination.pageSize);
      //params.append("_end", pagination.current * pagination.pageSize);
    
      queryParams.filter.offset =  (pagination.current - 1) * pagination.pageSize;
    
    }

    if (sorters && sorters.length > 0) {

      queryParams.filter.order = sorters.map((sorter) => sorter.field + " " + sorter.order).join(",");
      //params.append("order", sorters.map((sorter) => sorter.field).join(","));
      //params.append(" ", sorters.map((sorter) => sorter.order).join(","));

    }

    if (filters && filters.length > 0) {
      filters.forEach((filter) => {
        if ("field" in filter && filter.operator === "eq") {
          // Our fake API supports "eq" operator by simply appending the field name and value to the query string.    
          (queryParams.filter.where as WhereFilter)[filter.field] = filter.value;
        }
      });
    }

    const _URL = `${API_URL}/${resource}`;
    
    
    // Construct the query parameter string
    const parametros = new URLSearchParams({
      filter: JSON.stringify(queryParams.filter)
    });
    
    // Construct the full URL with query parameters
    const url = `${_URL}?${parametros.toString()}`;
    
    // Make the fetch request
    const response = await fetcher(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    

   

    if (response.status < 200 || response.status > 299) throw response;

    const data = await response.json();

    const total = Number(response.headers.get("x-total-count"));

    return {
      data,
      total,
    };
  },
      create: async ({ resource, variables }) => {
       
            const response = await fetcher(`${API_URL}/${resource}`, {
              method: "POST",
              body: JSON.stringify(variables),
              headers: {
                "Content-Type": "application/json",
              },
            });
    
        if (response.status < 200 || response.status > 299) throw response;
    
        const data = await response.json();
    
        return { data };
      },

  deleteOne: () => {
    throw new Error("Not implemented");
  },
  getApiUrl: () => API_URL,


  custom : async ({url, method}) => {

      const response = await fetcher(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        
    
        return { data };
  }

  ,


  // Optional methods:
  // getMany: () => { /* ... */ },
  // createMany: () => { /* ... */ },
  // deleteMany: () => { /* ... */ },
  // updateMany: () => { /* ... */ },
  // custom: () => { /* ... */ },
};