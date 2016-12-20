# Jeopardy-API

### This is an example repo for creating a simple API with Loopback, Elasticsearch, and Jeopardy!

####Setup

For this example, you need to have/install:

* node 6 (^6.6.0)
* npm 3 (^3.10.3)
* loopback (^2.22)
* loopback-component-explorer (^2.7)* [loopback-connector-es](https://github.com/strongloop-community/loopback-connector-elastic-search)  (^1.3) -- go star this repo now!
	To install loopback-connector-es, use:	`npm install loopback-connector-es --save --save-exact` 
* Install [Elasticsearch](https://www.elastic.co/guide/en/elasticsearch/reference/2.3/_installation.html)
* Install the ICU analysis plugin
 	`sudo bin/plugin install analysis-icu`
 	
 	(If you were running Elasticsearch, restart it)
* To start Elasticsearch: 
	`./bin/elasticsearch`
	
#### Data
The Jeopardy! dataset (>200K questions/answers) is available [here](https://flowingdata.com/2014/11/07/jeopardy-clues-data/).

Put the downloaded data in the `/data` directory and update the paths in the scripts in the `/scripts` directory.

#### Running 
This example includes:

* a Question model
* a datasource (db) for Elasticsearch
* an analyzer file for Elasticsearch
* a mapping file for Elasticsearch
* remote methods for Random and Search methods
* scripts to create an index, add mappings, and load data

To get started: 

* start Elasticsearch `./bin/elasticsearch`
* update the $PATH in `scripts/load-mapping.sh` to be the full path to those files/directories
* run `bash scripts/put-mapping.sh`

This should create an index in Elasticsearch for you. Then: 

* `npm install` (if you haven't already)
* start the server: `node server/server.js`
* open up the Explorer: [http://0.0.0.0:3000/explorer](http://0.0.0.0:3000/explorer)
* start playing!

If you want to add more documents to your index: 

* make sure you've downloaded the Jeopardy! dataset and saved it to the `/data` directory
* install [`jq`](https://stedolan.github.io/jq/download/)
* update the $PATH in `scripts/load.sh` to be the full path to those files/directories
* update the LIMIT and COUNTER in `scripts/load.sh` ***do NOT try to load all 200K questions with this script***
* run `bash scripts/load.sh`

	