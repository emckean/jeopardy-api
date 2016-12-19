curl -XDELETE 'http://localhost:9200/jeopardy-dev/' 
curl -XPUT http://localhost:9200/jeopardy-dev -d @"/Users/emckean/Code/temp/jeopardy-api/analyzer.json"
curl -XPUT http://localhost:9200/jeopardy-dev/_mapping/Question -d @"/Users/emckean/Code/temp/jeopardy-api/mapping.json"
curl -XPUT http://localhost:9200/jeopardy-dev/Question/1 -d @"/Users/emckean/Code/jeopardy-example/data/single-question.json"