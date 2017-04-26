1. Add eslint
2. add editor config
3. create module groups
4. create model groups
5. make group create meetup
6. validate in Postman

Model Group

- name: !String
- description: !String
- category: !String
- Meetups: [Meetup]

A group must be created to make a meetup. A meetup belongs to a group.