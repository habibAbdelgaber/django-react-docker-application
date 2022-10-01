const baseUrl = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : 'https://domain.com'



export const api = {
   tasks: {
      tasks: `${baseUrl}/tasks-api/`,
      create: `${baseUrl}/tasks-api/create-task/`,
      retrieve: id => `${baseUrl}/tasks-api/${id}/`,
      update: id => `${baseUrl}/tasks-api/${id}/`,
      delete: id => `${baseUrl}/tasks-api/delete-task/${id}/`,
   }
}