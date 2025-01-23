import { UserService } from "../services/userService";
import { UserModel } from "../models/userModel";
export class UserController {
  constructor(view, service) {
    this.userView = view;
    this.userService = service;
    this.users = [];
    this.login = this.login.bind(this);
    this.loadUsers = this.loadUsers.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleAddUser = this.handleAddUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
    this.handleEditUsertoForm = this.handleEditUsertoForm.bind(this);
    this.handleUpdateUsertoData = this.handleUpdateUsertoData.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.login();
  }
  //renderLoginView
  async login() {
    this.userView.renderLoginView();
    this.userView.binLogin(this.handleLogin);
  }
  //Load controller
  async loadUsers() {
    const users = await this.userService.getUsers();
    this.users = users;
    this.userView.renderTable(users);
    this.userView.bindAddUser(this.handleAddUser);
    this.userView.bindDeleteUser(this.handleDeleteUser);
    this.userView.bindEditUser(this.handleEditUsertoForm);
    this.userView.bindUpdateUser(this.handleUpdateUsertoData);
    this.userView.bindSearch(this.handleSearch);
  }
  //Login controller
  async handleLogin(account) {
    console.log(account);
    const accountUsers = await this.userService.getAccount();
    console.log(accountUsers);
    let isAuthenticated = false;
    accountUsers.forEach((accountUser) => {
      if (
        accountUser.email === account.username &&
        accountUser.password === account.password
      ) {
        isAuthenticated = true;
        this.loadUsers(alert("Login successfully"));
      }
    });
    if (!isAuthenticated) {
      alert("Wrong username or password");
    }
  }
  //Delete controller
  handleDeleteUser = async (userId) => {
    await this.userService.deleteUser(userId);
    this.loadUsers();
  };
  //Add controller
  handleAddUser = async (userData) => {
    const newUser = new UserModel(
      userData.id,
      userData.name,
      userData.office,
      userData.position,
      userData.email
    );
    await this.userService.addUser(newUser);
    this.loadUsers();
  };
  //Edit row id data Table to form
  handleEditUsertoForm = async (userId) => {
    const user = await this.userService.getUserById(userId);
    this.userView.fillForm(user);
  };
  //Update data id to data model
  handleUpdateUsertoData = async (userid, userData) => {
    const user = new UserModel(
      userid,
      userData.name,
      userData.office,
      userData.position,
      userData.email
    );
    await this.userService.updateUser(user);
    this.loadUsers();
  };
  // Handle search action
  handleSearch = async (searchTerm) => {
    const filteredUsers = this.users.filter((user) =>
      user.name.toUpperCase().includes(searchTerm.toUpperCase())
    );
    this.userView.renderTable(filteredUsers);
  };
}
