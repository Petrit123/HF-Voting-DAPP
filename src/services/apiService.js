import Api from "@/services/api"

export default {
castBallot(electionId, voterId, picked) {
    return Api().post('castBallot', {
        electionId: electionId,
        voterId: voterId,
        picked: picked
    })
},

queryWithQueryString(selected) {
    return Api().post('queryWithQueryString', {
        selected: selected
    })
}
}