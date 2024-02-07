export const load = async ({ }) => {
    const query = `
    {
        sponsors {
          nodes {
            sponsorFields {
                fieldGroupName
                name
                webpage
                mainsponsor
                logo {
                    node {
                      mediaItemUrl
                    }
                  }
              }
          }
        }
      }
    `;
    const response = await fetch(import.meta.env.VITE_PUBLIC_WORDPRESS_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query
        })
    });

    const data = await response.json();

    if (!data.data?.sponsors) {
        console.error('Error fetching pages:', data.errors);
        return {
            sponsors: {}
        }
    }

    // Access the first element of the nodes array
    let sponsors = data.data.sponsors.nodes
    
    console.log(sponsors);

    return {
        sponsors
    };
}
    
    
   