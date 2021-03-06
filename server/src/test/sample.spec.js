var chai = require('chai');
var sinon = require('sinon');
var should = chai.should();

var Sample = require('../sample')

describe('test',function(){
  it('should work',function(){
    (1+1).should.equal(2);
    [1,2,3].should.deep.equal([1,2,3]);
  });
  it('should throw an error',function(){
    (function(){
      throw new Error();
    }).should.throw(Error);
  });
});

describe('Sample',function(){
  var sandbox;
  beforeEach(function(){
    sandbox = new Sample();
  });
  afterEach(function(){
    sandbox = null;
  });
  it('should exist',function(){
    Sample.should.exist;
    sandbox.should.not.be.undefined;
  });
  describe('#init()',function(){
    it('should return "Welcome to TDD Sandbox!"',function(){
      sandbox.init().should.equal('Welcome to TDD Sandbox!');
    });
  });
  describe('mocking using Sinon',function(){
    it('should work',function(){
      var spy = sinon.spy(sandbox,'_privateFunc');
      sandbox.init();
      spy.called.should.be.true;
    });
  });
});