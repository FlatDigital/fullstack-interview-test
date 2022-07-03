import {Apis} from "@/helpers/API";

const get_branches = async () => {
    const response = await Apis.get(`/get_branches`);
    return response.data;
}
export {
    get_branches
}
