import { link } from "fs"

export const aboutData =[
        {
            "id":1,
            "img":"/assets/icons/About/tech.png" ,
            "alt":"Technologies",
            "title":"Technologies",
            "link":"/technologies"
        },
        {
            "id":2,
            "img":"/assets/icons/About/supportMech.png" ,
            "alt":"Support Mechanism",
            "title":"Support Mechanism",
            "link":"/support"
        },
        {
            "id":3,
            "img":"/assets/icons/About/onBoarding.png" ,
            "alt":"On-boarding Process",
            "title":"On-boarding Process",
            "link":"/boarding"
        },
        {
            "id":4,
            "img":"/assets/icons/About/serviceNetwork.png" ,
            "alt":"Our Services Network",
            "title":"Our Services Network",
            "link":"/networks"
        }
    ]

export const servicesData = [
    {
        "id":1,
        "img":"/assets/icons/OurServices/softSolution.png",
        "alt":"Cloud Based Software Solutions",
        "title":"Cloud Based Software Solutions"
    },
    {
        "id":2,
        "img":"/assets/icons/OurServices/moblie.png",
        "alt":"Mobile Applications",
        "title":"Mobile Applications"
    },
    {
        "id":3,
        "img":"/assets/icons/OurServices/BI.png",
        "alt":"Data Analytics & MS Power BI Dashboards",
        "title":"Data Analytics & MS Power BI Dashboards"
    },
    {
        "id":4,
        "img":"/assets/icons/OurServices/softIntegration.png",
        "alt":"3rd Party Softwares Integrations",
        "title":"3rd Party Softwares Integrations"
    },
    { 
        "id":5,
    "img":"/assets/icons/OurServices/salesSupport.png",
    "alt":"Comprehensive After Sales Support",
    "title":"Comprehensive After Sales Support"
    },
    { 
    "id":6,
    "img":"/assets/icons/OurServices/development.png",
    "alt":"development icon",
    "title":"Customized Software Development"
    },
    
]

export const applicationData = [
    {
        "id": 1,
        "img": "/assets/icons/Applications/app1_Order.png",
        "alt": "Order Booking App",
        "title": "Order Booking App"
    },
    {
        "id": 2,
        "img": "/assets/icons/Applications/app2_delivery.png",
        "alt": "Delivery & Collection App",
        "title": "Delivery & Collection App"
    },
    {
        "id": 3,
        "img": "/assets/icons/Applications/app3_merchandising.png",
        "alt": "Merchandising App",
        "title": "Merchandising App"
    },
    {
        "id": 4,
        "img": "/assets/icons/Applications/app4_management.png",
        "alt": "Asset Management App",
        "title": "Asset Management App"
    },
    {
        "id": 5,
        "img": "/assets/icons/Applications/app5_supply_chain.png",
        "alt": "Supply Chain Management App",
        "title": "Supply Chain Management App"
    },
    {
        "id": 6,
        "img": "/assets/icons/Applications/app6_Retailer.png",
        "alt": "Retailer App",
        "title": "Retailer App"
    },
    {
        "id": 7,
        "img": "/assets/icons/Applications/app7_employee_Service.png",
        "alt": "Employee Self Service App",
        "title": "Employee Self Service App"
    },
    {
        "id": 8,
        "img": "/assets/icons/Applications/app8_doctor.png",
        "alt": "Doctor/Consultant App",
        "title": "Doctor/Consultant App"
    },
    {
        "id": 9,
        "img": "/assets/icons/Applications/app9_pharmacist.png",
        "alt": "Pharmacist App",
        "title": "Pharmacist App"
    },
    {
        "id": 10,
        "img": "/assets/icons/Applications/app10_phlebotomy.png",
        "alt": "Phlebotomy App",
        "title": "Phlebotomy App"
    },
    {
        "id": 11,
        "img": "/assets/icons/Applications/app11_consultant.png",
        "alt": "Consultant App",
        "title": "Consultant App"
    },
    {
        "id": 12,
        "img": "/assets/icons/Applications/app12_dressing.png",
        "alt": "Dressing App",
        "title": "Dressing App"
    },
    {
        "id": 13,
        "img": "/assets/icons/Applications/app13_sales.png",
        "alt": "Sales Incentive App",
        "title": "Sales Incentive App"
    },
    {
        "id": 14,
        "img": "/assets/icons/Applications/app14_travelling.png",
        "alt": "Travelling App",
        "title": "Travelling App"
    },
    {
        "id": 15,
        "img": "/assets/icons/Applications/app15_staff_tracking.png",
        "alt": "Cane Procurement Staff Tracking App",
        "title": "Cane Procurement Staff Tracking App"
    },
    
]

export const productData = [

    {
        "id": 1,
        "value": "S&D Next",
        "img": "/assets/images/Products/sndnext.svg",
        "description": "Cloud Tenants Sales & Distribution Software provides tools and features to enhance Sales Efficiency, Track Leads and Opportunities, Manage Customer Relationships, Automate Sales Tasks, and Analyze Sales & Distribution Performance....",
        "gridImg": "/assets/images/Products/sndnextgrid.png",
        "styleRead": "text-[#066f8f] hover:border-[#0A9AC8] hover:ring-[#0A9AC8]",
        "styleSchedule": "bg-[#1b95c3] hover:bg-[#066B8A]",
        "link": "/softwares/snd-next"    },
    {
        "id": 2,
        "value": 'WMS Extended',
        "img": "/assets/images/Products/wmsextend.svg"  ,
        "description": "Cloud Tenants WMS Extended is a highly Efficient & Effective software to manage Inventory and Stock movement in the Warehouse. The Software is designed to manage extensive operations of Warehouse, including Inventory Management, Storage, and Movement of goods....",
        "gridImg": "/assets/images/Products/wmsextendgridRightSide.png",
        "styleRead": "text-[#6378bb] border-[#6378bb] hover:ring-[#6378bb]",
        "styleSchedule": "bg-[#6378bb] hover:bg-[#4d5c8c]",
        "link": "/softwares/wms"    },
    {
        "id": 3,
        value: "POS Xtreme",
        "img": "/assets/images/Products/pos.svg",
        "description": "Cloud Tenants Leading Point of Sale Solution for Small Retail Shops to Chain of Supermarkets. It serves as the Central Hub for processing Sales, Managing Inventory, and providing an overall Seamless Customer Experience....",
        "gridImg": "/assets/images/Products/posgrid.png",
        "styleRead": "text-[#fb8c00] border-[#fb8c00] hover:ring-[#fb8c00]",
        "styleSchedule": "bg-[#fb8c00] hover:bg-[#d26f00]",
        "link": "/softwares/pos-xtreme" 
    },
    {
        "id": 4,
        value: "POS Select",
        "img": "/assets/images/Products/poss.svg",
        "description": "Cloud Tenants Leading Point of Sale Solution for Food Kiosk to Fine Dining Restaurants Chain. POS Select, is designed specifically for the food service industry to manage Restaurant Operations, Streamline Order Processing, and Enhancing Overall Dining Experience....",
        "gridImg": "/assets/images/Products/possgrid.png",
        "styleRead": "text-[#7fb041] border-[#7fb041] hover:ring-[#7fb041]",
        "styleSchedule": "bg-[#7fb041] hover:bg-[#638938]",
        "link": "/softwares/pos-select" 
    },

]

