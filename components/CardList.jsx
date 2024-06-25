import { getConfigData } from "@/app/hooks/queries/configData"

export default async function CardList(){
  
  const configData = await getConfigData()
  console.log('typeof configData: ', typeof(configData))

  return(
    <div>
      {configData.services.map((service, index) => {
        return(
          <div>
            <h1>
              {service.name}
            </h1>
            <div>
              {service.items.map((item, index) => {
                return (
                  <div>
                    Name: {item.name}
                    url: {item.url}
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}