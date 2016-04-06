function StaffController(){
  this.name = "Bob";
  this.email = "bob@bobert.com";
  this.phone = "123-4373";
}

angular
  .module('app')
  .controller('StaffController', StaffController);