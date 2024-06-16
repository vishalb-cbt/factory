import { CRUDService } from "./crudService";

// examples:
//Initialize CRUD service for users
const userService = new CRUDService('user');
//Create a new user
userService.createEntity({ name: 'Vishal B', email: 'vishal@code.com' })
    .then(createdUser => {
        console.log('Created user:', createdUser);
    })
    .catch(error => {
        console.error('Error creating user:', error);
    });

//Read an existing user
// userService.readEntity('1718565691840')
//     .then(user => {
//         console.log('Read user:', user);
//     })
//     .catch(error => {
//         console.error('Error reading user:', error);
//     });

// //Update an existing user
// userService.updateEntity('1718565691840', { name: 'Vishal Biradar' })
//     .then(updatedUser => {
//         console.log('Updated user:', updatedUser);
//     })
//     .catch(error => {
//         console.error('Error updating user:', error);
//     });

// //Delete an existing user
// userService.deleteEntity('1718565691840')
//     .then(() => {
//         console.log('User deleted successfully');
//     })
//     .catch(error => {
//         console.error('Error deleting user:', error);
//     });


// Initialize CRUD service for orders
// const orderService = new CRUDService('order');

// //Create a new order
// orderService.createEntity({ product: 'Keyboard', quantity: 2 })
//     .then(createdOrder => {
//         console.log('Created order:', createdOrder);
//     })
//     .catch(error => {
//         console.error('Error creating order:', error);
//     });

// //Read an existing order
// orderService.readEntity('1718566335502')
//     .then(order => {
//         console.log('Read order:', order);
//     })
//     .catch(error => {
//         console.error('Error reading order:', error);
//     });

// //Update an existing order
// orderService.updateEntity('1718566335502', { quantity: 3 })
//     .then(updatedOrder => {
//         console.log('Updated order:', updatedOrder);
//     })
//     .catch(error => {
//         console.error('Error updating order:', error);
//     });

// //Delete an existing order
// orderService.deleteEntity('1718566335502')
//     .then(() => {
//         console.log('Order deleted successfully');
//     })
//     .catch(error => {
//         console.error('Error deleting order:', error);
//     });
