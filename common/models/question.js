'use strict';

function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}


module.exports = function(Question) {

	Question.findRandom = function(cb){
		var random = randomInt(1, 300000)
		Question.findOne({
				  "native": {
				    "query": {
				      "function_score": {
				        "functions": [
				          {
				            "random_score": {
				              "seed": random
				            }
				          }
				        ],
				        "score_mode": "sum"
				      }
				    }
				  }
            }, function (err, question){
				cb(null, question);
			});
	}

	Question.search = function(term, cb){
		//all terms must be present in at least one field for a document to match
		Question.all({
                native: {
					query: {
				    multi_match: {
				      query: term,
				      fields: [ 
				        'question.text',
				        'question.shingle',
				        'question.stemmed'
				      ],
				      type: 'cross_fields', 
				      operator: 'and'
				    }
				  }
                }
                
            }, function (err, questions){
            	if (err){

            	}
				cb(null, questions);
			});
	}

	Question.remoteMethod(
		'search', {
			http: {
				path: '/search',
				verb: 'get'
			},
			description: "Gets questions that include term",
			accepts: {arg: 'term', type: 'string', http: {source: 'query'}, description: "word or phrase to search for"},
			returns: {
				arg: 'questions',
				type: 'json'

			}
		})

	Question.remoteMethod(
		'findRandom', {
			http: {
				path: '/findRandom',
				verb: 'get'
			},
			description: 'Gets one random question',
			returns: {
				arg: 'questions',
				type: 'json'
			}
		})

	//let's disable the methods we don't want people to use
	Question.disableRemoteMethodByName('create');		// Removes (POST) /Questions
	Question.disableRemoteMethodByName('exists');		// Removes (GET) /Questions/:id/exists
	Question.disableRemoteMethodByName('findById', true);		// Removes (GET) /Questions/:id
	Question.disableRemoteMethodByName('upsert', true);		// Removes (PUT) /Questions
	Question.disableRemoteMethodByName('deleteById', true);	// Removes (DELETE) /Questions/:id
	Question.disableRemoteMethodByName('replaceById', true);	// Removes (DELETE) /Questions/:id
	Question.disableRemoteMethodByName("updateAll", true);		// Removes (POST) /Questions/update
	Question.disableRemoteMethodByName("replaceOrCreate", true);		// Removes (POST) /Questions/replaceOrCreate
	Question.disableRemoteMethodByName("updateAttributes", false); // Removes (PUT) /Questions/:id
	Question.disableRemoteMethodByName('createChangeStream', true); // removes (GET|POST) /Questions/change-stream
	Question.disableRemoteMethodByName('upsertWithWhere', true); // removes POST /Questions/upsertWithWhere

};
