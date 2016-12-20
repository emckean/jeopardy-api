curl -XDELETE 'http://localhost:9200/jeopardy-dev/' 
curl -XPUT http://localhost:9200/jeopardy-dev -d @"$PATH/analyzer.json"
curl -XPUT http://localhost:9200/jeopardy-dev/_mapping/Question -d @"$PATH/mapping.json"
curl -XPUT http://localhost:9200/jeopardy-dev/Question/1 -d @"$PATH/data/single-question.json"