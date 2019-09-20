Rails API
===========

## SWBATs
- [x] Create an API using Rails
- [x] Render JSON formatted data
- [x] Use namespacing to version control an API
- [x] Use serializers to control internal structure of JSON data
- [x] Use `fetch` in JS to communicate to an API
- [x] Coordinate data on the frontend with data on the backend
- [x] Synthesize knowledge of DOM manipulation, event listeners, and asynchronous JS with Rails concepts

## Notes


### Objectives

### Getting started

`rails new <app_name> --api`

The `--api` flag tells Rails to build itself for use as an API, making it more lightweight, and setting up initializers that will allow communication between servers.

### Serializers

#### Active Model Serializers
- Slow
- No longer well supported
- Gets the job done

#### Fast JSON Serializer
- Super fast
- Made by Netflix


### Resources
- Faker: `https://github.com/faker-ruby/faker`
- AMS: `https://github.com/rails-api/active_model_serializers`
- Fast JSON: `https://github.com/Netflix/fast_jsonapi`

