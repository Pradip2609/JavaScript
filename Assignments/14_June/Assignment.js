class vehicle{
    comp_name;
    Model_name;
    Engine;
    color;
    launch_year;
    constructor(compname,modelname,engine,color,launch)
    {
        this.comp_name=compname;
        this.Model_name=modelname;
        this.Engine=engine;
        this.color=color;
        this.launch_year=launch;
    }
    vehicledetails(){
       console.log(`Vehicle Details are : ${this.comp_name} ${this.Model_name} ${this.Engine} ${this.color} ${this.launch_year} `)
    }

}
let veh1 = new vehicle("Bajaj","Avenger","180","Black","2004");
let veh2 = new vehicle("Royal Enfield","Bullets","350","Stealth Black","1998");
let veh3 = new vehicle("Kawasaki","NINJA H2R","998","Mirror Coated Matte Spark Black","2021");
let veh4 = new vehicle("mercedes-benz","NINJA H2R","998","White","1997");
let veh5 = new vehicle("porsche","718","3997","Scarlet Red","1996");
veh1.vehicledetails();
veh2.vehicledetails();
veh3.vehicledetails();
veh4.vehicledetails();
veh5.vehicledetails();


