
Requirements:

Nodejs and npm 

To start the App:

ProjectFolder> npm i
ProjectFolder> npm start

I have used on the the existing boilterplate code I have created based on create-react-app. 


Src/contact/Contact is the main container and holds the state of the application.

Extra Credit:

- Accessibility

  I have used antd design library to build the UI, as this has all the accessibility built into the design

- Unit Testing

  I have not included unit test cases, but I am familiar of enzyme's shallow rendering.

- Reusable components

  There is not much to re use any of the components, a contactCard can be crearted and can be used for Each Contact, I would add Proptypes and DefaultProps. But I preffered Antd Table which has lot of built in functionalities like selecting multiple rows and updating(Just in case if multiple contacts can be deleted by selecting all at once - which I did not implement)

  I believe thinking in ahead while designing a features and provide  enough room for all the future enchancement possibilites.


- Sample Documentation on any reusable components

    <Table
      dataSource={contactList}
      columns={columns}
      rowKey={record => record.id}
     />

Table Component takes 3 props, 
dataSource = Array of objects(each object is each row on the table) 
columns = [{
        title: "Name",  // Title of the Column
        dataIndex: "name", // object key to look for 
        key: "name", // Optional, if dataIndex is unique
        width: 250 // Width of the column 
      }]
rowKey = Row's unique key 







