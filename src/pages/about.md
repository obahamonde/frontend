---
title: Design Desicions
---
<div class="text-center">
  <!-- You can use Vue components inside markdown -->
  <div i-carbon-dicom-overlay class="text-4xl -mb-6 m-auto" />
  <h3>Why AioFauna:</h3>
</div>

## What is AioFauna?

It's an opinionated full-stack framework for building Web Applications with FaunaDB, Python and Vue.js focused on developer experience and productivity.

## Why AioFauna?

### Why FaunaDB?

The goal of the project is to build an Stack like NextJS NuxtJS SvelteKit but with a python backend for full stack developers So picking the main database was the most crucial decission to make.
I chose FaunaDB because is suitable for the widest variety of uses cases since it has the following characteristics:
- Is Serverless (No O&M burden = NoOps)
- It's Globally distributed through a CDN so adding an additional layer of caching or message queueing will be optional and constrained to specific use cases.
- Is timezone aware, so you can query data based on the user's timezone.
- Is document based  and relational at the same time, so and ODM could be built on top of it.
- It's extensible through an expression based functional language (FQL) with a rich set of features, so you can build complex queries and mutations.
- It has a generous Free Tier, so you can build a prototype or a small application without paying a dime.
- It's also a Graph based databse so it supports complex relational scenarios like social networks.
- **q**: `aiofauna` provides the `_Expr` object and FaunaClient as classmethods, so you can use the native driver directly to query your models from the class objects by wrapping a `Query` object with `_Expr` and passing it to the `FaunaClient` instance.
- **CRUD methods**: `aiofauna` provides CRUD operations out of the box:
  * **`get`**: instance coroutine that retrieves a single document by ref.
  * **`find_unique`**: classmethod coroutine that retrieves a single document by a unique field.
  * **`find_many`** to retrieve multiple documents by an indexed field.
  * `all` to retrieve all documents from a collection.
  * `create` to create a new document from an instance of the model.
  * `save` to upsert a document from an instance of the model.
  * `update` to update a document from the class object by providing the `ref` and the `data` to update as keyword arguments.
  * `delete` to delete a document from the class object by providing the `ref` as a keyword argument.
  * `delete_unique` to delete a document from the class object by providing the `ref` as a keyword argument.
  * `exists`  to check if a document exists by providing the `ref` as a keyword argument.
  * `query` to query documents from the class object by providing the `Query` object as an string argument.
  * `gen_ts` to generate the TypeScript definition for the model.
  * `gen_store` to generate the Pinia store for the model.
  * `provision` to provision the collection and indexes and unique constraints for the model based on the `ModelField` object created by the `Field` factory function metadata.
  * The `ref` and `ts` fields are optional properties that are created when a document instance is created on the database and forms part of the schema definition.
  * All the fields and properties are correctly serialized via custom encoders and decoders and the `ModelField` object is used to validate the data before it's sent to the database.
  * The `ModelField` object is also used to generate the TypeScript definition for the model and the Pinia store.
  * The `ModelField` object is also used to provision the collection and indexes and unique constraints for the model.
  
