curl -XPUT 'http://localhost:9200/jeopardy-dev'
curl -XPUT http://localhost:9200/jeopardy-dev/Question/1 -d @"/Users/emckean/Code/jeopardy-example/data/single-question.json"