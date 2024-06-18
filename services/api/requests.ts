import requestAxios from "@/services/api/index";


export async function load(url: string): Promise<any> {
    const {data} = await requestAxios.get(url)
    return data
}