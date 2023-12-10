class DbService {
    constructor(baseUrl) {
      this.url = baseUrl;
    }

    async createUser() {
        try {
          const request = new Request(this.url + "/newuser", {
            method: "post",
          });
          return useRequest(request);
        } catch (error) {
          console.error(error);
        }
      }
    
      async getUser(user_id) {
        try {
          const request = new Request(`${this.url}/${user_id}`, {
            method: "get",
          });
          return useRequest(request);
        } catch (error) {
          console.log(error);
        }
      }

      async addUserToSegment(user_id, segment_name) {
        try {
          const request = await fetch(`${this.url}/editing`, {
            body: `{
                "id":${user_id},
                "addsegments":[{"segment":"${segment_name}", "interval":"1"}]
            }`,
            method: "POST",
          });
          return request.text();
        } catch (error) {
          console.log(error);
        }
      }

      async delUserFromSegment(user_id, segment_name) {
        try {
          const request = await fetch(`${this.url}/editing`, {
            body: `{
                "id":${user_id},
                "delsegments":["${segment_name}"]
            }`,
            method: "POST",
          });
          return request.text();
        } catch (error) {
          console.log(error);
        }
      }

      async createSegment(segment_name, percent) {
        try {
          const request = await fetch(`${this.url}/create`, {
            body: `{
                "segment":"${segment_name}",
                "percent":${percent}
            }`,
            method: "POST",
          });
          return request.text();
        } catch (error) {
          console.log(error);
        }
      }

      async deleteSegment(segment_name) {
        try {
          const request = new Request(`${this.url}/delete/${segment_name}`, {
            method: "DELETE",
          });
          return useRequest(request);
        } catch (error) {
          console.log(error);
        }
      }

      async getReport(date) {
        try {
          return `${this.url}/download?date=${date}`;
        } catch (error) {
          console.log(error);
        }
      }
}

async function useRequest(request) {
    const response = await fetch(request);
    return await response.json();
  }

export const dbService = new DbService(
    "http://192.168.128.128:8080"
  );
