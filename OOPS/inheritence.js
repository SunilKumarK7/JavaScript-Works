// inheritance
class GrandParent{
    m0(){
        console.log("inside grandparent m0 method")
    }
}
class Parent extends GrandParent{
    m1(){
        console.log("inside parent m1 method")
    }
}

class Child extends Parent{
    m2(){
        console.log("inside child m2 method")
    }
}

var obj=new Child()
obj.m2()
obj.m1()
obj.m0()