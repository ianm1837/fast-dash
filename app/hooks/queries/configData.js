'use server'
export async function getConfigData(){
  const res = await fetch('http://localhost:3000/api/config')

  const data = await res.json() 
  console.log("data: ", data)
  return data 
}

export async function setConfigData(data){
  console.log('set config data: ', data)
}