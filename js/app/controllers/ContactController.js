function ContactController() {
  this.name = 'Alejandro';
  this.email = "lala@lala.com";
  this.phone = "999-0000";
  var vm = this;

  this.changeName = function() {
    vm.name = 'Alejo';
  }
}

angular
  .module('app')
  .controller('ContactController', ContactController);