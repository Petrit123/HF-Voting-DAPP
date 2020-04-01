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
},

registerVoter(voterId, registrarId, firstName, lastName) {
    return Api().post('registerVoter', {
      voterId: voterId,
      registrarId: registrarId,
      firstName: firstName,
      lastName: lastName,
      
    }) 
  },
  validateVoter(voterId) {
    return Api().post('validateVoter', {
      voterId: voterId
    }) 
  }

}