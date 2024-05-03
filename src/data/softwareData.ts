interface Software {
    id: number;
    title: string;
    cards: {
      id: number;
      img: string;
      description: string;
      gridImg: string;
      styleButton: string;
    }[];
  }

export const softwareData: Software[] = [
    { 
        id : 1,
        title: "OUR SPECIALITY PRODUCTS PORTFOLIO",
        cards: [{
            id : 2,
            img: "/assets/images/Products/sndnext.png",
            description: "Cloud Tenants Sales & Distribution Software provides tools and features to enhance Sales Efficiency, Track Leads and Opportunities, Manage Customer Relationships, Automate Sales Tasks, and Analyze Sales & Distribution Performance....",
            gridImg: "/assets/images/Products/sndnextgrid.png",
            styleButton: "bg-[#1b95c3] hover:bg-[#066B8A] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none"
            },
            {
                id: 3,
                img: "/assets/images/Products/sndesuite.png",
                description: "Cloud Tenants S&D e.suite takes you to the next level of Business Optimization. It includes DBRS, Sales Forecast, Distribution Claims, Sales Incentives and Merchandising Softwares that can drive your business towards success..",
                gridImg: "/assets/images/Products/sndesuitegrid.png",
                styleButton: "bg-[#1b94c1] hover:bg-[#4d5c8c] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none"
            }
 
    ]
          },
          {
            id: 3,
            title: 'POS Solutions',
            cards: [{
                id: 4,
                img: "/assets/images/Products/pos.png",
                description: "Cloud Tenants Leading Point of Sale Solution for Small Retail Shops to Chain of Supermarkets. It serves as the Central Hub for processing Sales, Managing Inventory, and providing an overall Seamless Customer Experience....",
                gridImg: "/assets/images/Products/posgrid.png",
                styleButton: "bg-[#fb8c00] hover:bg-[#d26f00] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none" 
            },
            {
                id: 5,
                img: "/assets/images/Products/poss.png",
                description: "Cloud Tenants Leading Point of Sale Solution for Food Kiosk to Fine Dining Restaurants Chain. POS Select, is designed specifically for the food service industry to manage Restaurant Operations, Streamline Order Processing, and Enhancing Overall Dining Experience....",
                gridImg: "/assets/images/Products/possgrid.png",
                styleButton: "bg-[#7fb041] hover:bg-[#638938] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none" 
            },
        ]
          },
          {
            id: 6,
            title: 'ERP Modules',
            cards: [
            {
            id: 7,
            img: "/assets/images/Products/wmsextend.png",
            description: "Cloud Tenants WMS Extended is a highly Efficient & Effective software to manage Inventory and Stock movement in the Warehouse. The Software is designed to manage extensive operations of Warehouse, including Inventory Management, Storage, and Movement of goods....",
            gridImg: "/assets/images/Products/wmsextendgrid.png",
            styleButton: "bg-[#6378bb] hover:bg-[#4d5c8c] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none"
            
            },
            {
                
                id: 8,
                img: "/assets/images/Products/scm.png",
                description: "Cloud Tenants SCM+ (Supply Chain Management) solution offers end-to-end Supply Chain Cycle. This module oversees the Procurement, Inventory, and Distribution of Materials and Products, as well as the management of Vendors and Suppliers..",
                gridImg: "/assets/images/Products/scmgrid.png",
                styleButton: "bg-[#c47ece] hover:bg-[#A663C1] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none" 
            },
            {
                id: 9,
                img: "/assets/images/Products/finance.png",
                description: "Cloud tenants Finance+ Module manages the Financial transactions and Accounting activities, including General Ledger, Accounts Payable, Accounts Receivable, Cash Management, Fixed Assets Management..",
                gridImg: "/assets/images/Products/financegrid.png",
                styleButton: "bg-[#CDDC39] hover:bg-[#638938] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none" 
            },
            {
                id: 10,
                img: "/assets/images/Products/hcm.png",
                description: "Cloud Tenants HCM+ (Human Capital Management) solutions offers end-to-end Employee Lifecycle Management. t manages Recruitment, Detailed HR Information, Time & Attendance, Payroll and other processes..",
                gridImg: "/assets/images/Products/hcmgrid.png",
                styleButton: "bg-[#1798a7] hover:bg-[#00818F] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none" 
            },
            {
                id: 11,
                img: "/assets/images/Products/production.png",
                description: "Cloud Tenants Production+ Module is an excellent software module for businesses engaged in production of various goods.It Automates & Optimizes Planning, Scheduling, Inventory Management, Quality Control and Real Time Reporting for effective production management..",
                gridImg: "/assets/images/Products/productiongrid.png",
                styleButton: "bg-[#4C8EDF] hover:bg-[#4179BE] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none" 
            },
            {
                id: 12,
                img: "/assets/images/Products/import.png",
                description: "Cloud Tenants Import+ module manages Landed Cost Tracking, Duty and Taxes, LC Opening/Arrival and Import Good Received Note (GRN) and others..",
                gridImg: "/assets/images/Products/importgrid.png",
                styleButton: "bg-[#105AB6] hover:bg-[#0e4d9b] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none" 
            },
            {
                id: 13,
                img: "/assets/images/Products/primary.png",
                description: "Cloud Tenants Primary Sales Module provides end-to-end Sales operations management directly between manufacturer/importer and customer. It covers receiving Order from customer to delivery of order to customer..",
                gridImg: "/assets/images/Products/primarygrid.png",
                styleButton: "bg-[#00ccff] hover:bg-[#00add9] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none" 
            },        
        ]
          }
]