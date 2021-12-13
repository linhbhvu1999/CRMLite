//During the test the env variable is set to test
const Customer = require("../app/models/customers");
var newCustomerID;
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index.js');
let should = chai.should();

chai.use(chaiHttp);

describe('Test', function() {
    beforeEach((done) => {
        let newCustomer = new Customer({ 'firstName': 'Bob', 'lastName': 'Small',
'company': "Bob's Shoes", 'email': 'bob@woo.hoo' });
newCustomerID = newCustomer.id;
        newCustomer.save((err) => {
            done();
        })
    });
    afterEach((done) => {
        Customer.collection.drop();
        done();
    });
    it('/GET index.html');
    it('/GET 404');
    it('/GET customers');
    it('/GET a customer');
    it('/POST customers');
    it('/PUT customers');
    it('/DELETE customers');

  });

  it('it should GET the index.html file', (done) => {
  chai.request(server)
  .get('/index.html')
  .end((err, res) => {
  res.should.have.status(200);
  res.should.be.html;
  done();
  });
  });

  it('it should return 404', (done) => {
    chai.request(server)
    .get('/index2.html')
    .end((err, res) => {
    res.should.have.status(404);
    done();
    });
    });

describe('/GET customers', () => {
        it('it should GET all the customers', (done) => {
        chai.request(server)
        .get('/customers')
        .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('array');
        res.body[0].should.have.property('_id');
        res.body[0].should.have.property('firstName');
        res.body[0].firstName.should.equal('Bob');
        done();
        });
        });
        });

describe('/GET a customer', () => {
            it('it should GET a customer', (done) => {
                chai.request(server)
                    .get('/customers/ross')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.be.a('object');
                        res.body.should.have.property('_id');
                        res.body.should.have.property('firstName');
                        res.body.firstName.should.equal('Bob');
                        res.body._id.should.equal(newCustomerID);
                        done();
                    });
            });
        });

describe('/POST customers', () => {
            it('it should POST a customer', (done) => {
                chai.request(server)
                    .post('/customers')
                    .send({ 'firstName': 'Bob', 'lastName': 'Small', 'company': 
    "Bob's Shoes", 'email': 'bob@woo.hoo' })
                    .end((err, res) => {
                        res.should.have.status(201);
                        res.body.should.be.a('object');
                        res.body.should.have.property('firstName');
                        res.body.firstName.should.equal('Bob');
                        done();
                    });
            });
        });

describe('/PUT customers', () => {
            it('it should PUT a customer', (done) => {
                chai.request(server)
                    .put('/customers')
                    .send({ '_id': newCustomerID, 'firstName': 'Bob', 'lastName': 
    'Small Jr', 'company': "Bob's Shoes", 'email': 'bob@woo.hoo' })
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.should.be.json;
                        res.body.should.be.a('object');
                        res.body.should.have.a.property('lastName');
                        res.body.lastName.should.equal('Small Jr');
                        done();
                    });
            });
        });    

describe('/DELETE customers', () => {
            it('it should DELETE a customer', (done) => {
                chai.request(server)
                    .delete('/customers/' + newCustomerID)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        res.body.should.have.property('deletedCount')
                        res.body.deletedCount.should.equal(1)
                        done();
                    });
            });
        });