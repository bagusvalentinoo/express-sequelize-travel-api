# Travel API
This project is a REST API for a travel application built using Express.js, Node.js, and the ORM Sequelize.

## Requirements
1. Node JS Version >16
2. XAMPP - Local Server include local DBMS
3. Web Browser

## Installation
1. Clone this repository https://github.com/bagusvalentinoo/express-sequelize-travel-api.git or you can copy this code and paste in your terminal
   ```sh
   git clone https://github.com/bagusvalentinoo/express-sequelize-travel-api.git
   ```
2. change to project directory or copy this code
   ```sh
   cd express-sequelize-travel-api
   ```
3. Open in your code editor, in here I'am using VSCode
   ```sh
   code .
   ```
4. Install npm
   ```sh
   npm install
   ```

## Command
1. Migrate
  ```sh
  npm run migrate
  ```
2. Migrate Rollback and Migrate or Migrate Fresh
  ```sh
  npm run migrate:fresh
  ```
3. Migrate Fresh and Run Seeders
  ```sh
  npm run migrate:fresh:seed
  ```

## API Reference Version 1

##

### Auth Routes

#### Sign Up

```http
  /api/v1/auth/sign-up
```

| method | x-acess-token     | role                |
| :-------- | :------- | :------------------------- |
| `POST` | `false` | `public or anyone can access` |

#### Sign In

```http
  /api/v1/auth/sign-in
```

| method | x-acess-token     | role                |
| :-------- | :------- | :------------------------- |
| `POST` | `false` | `public or anyone can access` |

##

### Public Routes

#### Get all packets

```http
  /api/v1/packets
```

| method | x-acess-token     | role                |
| :-------- | :------- | :------------------------- |
| `GET` | `false` | `public or anyone can access` |

##

### Admin Routes

#### Get all packets

```http
  /api/v1/admin/packets
```

| method | x-acess-token     | role                |
| :-------- | :------- | :------------------------- |
| `GET` | `true` | `admin` |

#### Create a new packets

```http
  /api/v1/admin/packets
```

| method | x-acess-token     | role                |
| :-------- | :------- | :------------------------- |
| `POST` | `true` | `admin` |

#### Get a single packet

```http
  /api/v1/admin/packets/{id}
```

| method | x-acess-token     | role                |
| :-------- | :------- | :------------------------- |
| `GET` | `true` | `admin` |

#### Update a packet

```http
  /api/v1/admin/packets/{id}
```

| method | x-acess-token     | role                |
| :-------- | :------- | :------------------------- |
| `PUT/PATCH` | `true` | `admin` |

#### Delete a packet

```http
  /api/v1/admin/packets/{id}
```

| method | x-acess-token     | role                |
| :-------- | :------- | :------------------------- |
| `DELETE` | `true` | `admin` |

##

### Customer Routes

#### Booking

```http
  /api/v1/customer/booking
```

| method | x-acess-token     | role                |
| :-------- | :------- | :------------------------- |
| `POST` | `true` | `customer` |

#### Payment

```http
  /api/v1/customer/payment/{id}
```

| method | x-acess-token     | role                |
| :-------- | :------- | :------------------------- |
| `PUT` | `true` | `customer` |


## Screenshots

### Auth Routes
* Sign-Up
* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_1.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_2.jpg)

* Sign-In
* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_3.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_4.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_5.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_6.jpg)

##

### Public Routes

* Packets
* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_7.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_8.jpg)

##

### Admin Routes

* Get All Packets
* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_9.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_10.jpg)

* Create a new packet
* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_11.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_12.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_13.jpg)

* Get a single packet
* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_24.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_25.jpg)


* Update a packet
* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_14.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_15.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_16.jpg)

* Delete a packet
* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_17.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_18.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_19.jpg)


##

### Customer Routes

* Booking
* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_20.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_21.jpg)

* Payment
* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_22.jpg)

* ![App Screenshot](https://raw.githubusercontent.com/bagusvalentinoo/express-sequelize-travel-api/master/documentation_api/Screenshot_23.jpg)
