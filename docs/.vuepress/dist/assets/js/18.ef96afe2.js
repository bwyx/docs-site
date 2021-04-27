(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{370:function(e,s,t){"use strict";t.r(s);var n=t(45),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"digger-yml-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#digger-yml-reference"}},[e._v("#")]),e._v(" digger.yml reference")]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("The structure of this digger.yml file is subject to change in future version of digger.")])]),e._v(" "),t("h2",{attrs:{id:"structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#structure"}},[e._v("#")]),e._v(" Structure")]),e._v(" "),t("p",[e._v("There are two main top-level parts of digger.yml, "),t("code",[e._v("project")]),e._v(" and "),t("code",[e._v("services")]),e._v(". The project section contains metadata about the active project. The services section contains a list of service metadata. In the snippet bellow we capture the main elements of a typical digger.yml along with comments to explain each field")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("project:\n  name: projectname\nservices:\n  svc:\n    service_name: svc1 # The service name, in most cases it will be the same as the toplevel key\n    path: . # where the service lives, a path relative to the root repo\n    env_files: [] # currently unused, in future will be used to point .env files \n    publicly_accissible: true # whether this is an external or internal service\n    service_type: container # the type of the service\n    container_port: 5000 # the port which the container listens in. NOTE this is the container port NOT the port exposed to the host\n    health_check: /api/v1/hello # An unauthenticated path, required by loadbalancers\n    dockerfile: ./Dockerfile # path to dockerfile relative to root repository\n    needs: [] # needs specifies\n    dependencies: {} # currently unused, in the future will point to other services which this service depends on \n")])])]),t("h2",{attrs:{id:"defining-resource-dependencies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#defining-resource-dependencies"}},[e._v("#")]),e._v(" Defining Resource dependencies")]),e._v(" "),t("p",[e._v("Resources are specified under every service. here is an example where svcA needs one resource and svcB needs another database resource. Names in the spec have to be unique.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("services:\n    svcA:\n        service_name: \n        service_path: \n        needs:\n        - database:\n            name: x\n            engine: postgres\n            size: 10gb\n\n    svcB:\n        service_name:\n        service_path\n        needs:\n        - database:\n            name: y\n            engine: mysql\n            size: 30gb\n")])])]),t("p",[e._v("Note that two services can optionally share the same resource. This will help reduce infrastructure creation time and the costs incurred. To share resources we can reference other resources using a dollar sign:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("services:\n    svcA:\n        service_name: serviceA\n        service_path: ./\n        # ...\n        needs:\n        - database:\n            name: x1\n            engine: postgres\n            size: 10gb\n\n    svcB:\n        service_name: seviceB\n        service_path: ./serviceB\n        needs:\n        - database:\n            ref: $x1 #<-- database x1 is now accessible by svcB\n")])])]),t("h2",{attrs:{id:"using-existing-resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#using-existing-resources"}},[e._v("#")]),e._v(" Using existing resources")]),e._v(" "),t("p",[e._v("If you want to use existing resources and make them accessible by a service you can do that by specifying this in a top block called existing_resources. This is on a per-environment basis using {environment}.{resource_name} as the key and an arn value")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("existing_resources:\n    - production.mydb: arn_string\n    - staging: arn_string\n\n")])])])])}),[],!1,null,null,null);s.default=a.exports}}]);