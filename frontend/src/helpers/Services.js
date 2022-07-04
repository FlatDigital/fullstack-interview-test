import {Apis} from "@/helpers/API";

const get_branches = async () => {
    const response = await Apis.get(`/get_branches`);
    return response.data;
}

const get_branch = async (branch_name) => {
    const response = await Apis.get(`/get_branch/`, {headers: {'branch_name': branch_name}});
    return response.data;
}

const get_commits = async (branch_name) => {
    const response = await Apis.get(`/get_commits/`, {headers: {'branch_name': branch_name}});
    return response.data;
}

const get_commit = async(commit_sha)=> {
    const response = await Apis.get(`/get_commit/`, {headers: {'commit_sha': commit_sha}});
    return response.data;
}
export {
    get_branches,
    get_branch,
    get_commits,
    get_commit
}
