interface Software {
    id: number;
    title: string;
    cards: {
      id: number;
      img: string;
      description: string;
      gridImg: string;
      styleRead: string;
      styleSchedule: string;
      link: string 
    }[];
  }

export const softwareData: Software[] = [
    { 
        id : 1,
        title: "OUR SPECIALITY PRODUCTS PORTFOLIO",
        cards: [{
            id : 2,
            img: "/assets/images/Products/sndnext.svg",
            description: "Cloud Tenants Sales & Distribution Software provides tools and features to enhance Sales Efficiency, Track Leads and Opportunities, Manage Customer Relationships, Automate Sales Tasks, and Analyze Sales & Distribution Performance....",
            gridImg: "/assets/images/Products/sndnextgrid.png",
            styleRead: "text-[#066f8f] hover:border-[#0A9AC8] hover:ring-[#0A9AC8]",
            styleSchedule: "bg-[#1b95c3] hover:bg-[#066B8A]",
            link: "/softwares/snd-next"
            },
            {   
                id: 3,
                img: "/assets/images/Products/sndesuite.svg",
                description: "Cloud Tenants S&D e.suite takes you to the next level of Business Optimization. It includes DBRS, Sales Forecast, Distribution Claims, Sales Incentives and Merchandising Softwares that can drive your business towards success..",
                gridImg: "/assets/images/Products/sndesuitegrid.png",
                styleRead: "text-[#1b94c1] hover:border-[#1b94c1] hover:ring-[#1b94c1]",
                styleSchedule: "bg-[#1b94c1] hover:bg-[#3786a3]",
                link: "/softwares/snd-esuite"
            }
 
    ]
          },
          {
            id: 2,
            title: 'POS Solutions',
            cards: [{
                id: 2,
                img: "/assets/images/Products/pos.svg",
                description: "Cloud Tenants Leading Point of Sale Solution for Small Retail Shops to Chain of Supermarkets. It serves as the Central Hub for processing Sales, Managing Inventory, and providing an overall Seamless Customer Experience....",
                gridImg: "/assets/images/Products/posgrid.png",
                styleRead: "text-[#fb8c00] border-[#fb8c00] hover:ring-[#fb8c00]",
                styleSchedule: "bg-[#fb8c00] hover:bg-[#d26f00]",
                link: "/softwares/pos-xtreme" 
            },
            {
                id: 3,
                img: "/assets/images/Products/poss.svg",
                description: "Cloud Tenants Leading Point of Sale Solution for Food Kiosk to Fine Dining Restaurants Chain. POS Select, is designed specifically for the food service industry to manage Restaurant Operations, Streamline Order Processing, and Enhancing Overall Dining Experience....",
                gridImg: "/assets/images/Products/possgrid.png",
                styleRead: "text-[#7fb041] border-[#7fb041] hover:ring-[#7fb041]",
                styleSchedule: "bg-[#7fb041] hover:bg-[#638938]",
                link: "/softwares/pos-select" 
            },
        ]
          },
          {
            id: 3,
            title: 'ERP Modules',
            cards: [
            {
            id: 2,
            img: "/assets/images/Products/wmsextend.svg",
            description: "Cloud Tenants WMS Extended is a highly Efficient & Effective software to manage Inventory and Stock movement in the Warehouse. The Software is designed to manage extensive operations of Warehouse, including Inventory Management, Storage, and Movement of goods....",
            gridImg: "/assets/images/Products/wmsextendgrid.png",
            styleRead: "text-[#6378bb] border-[#6378bb] hover:ring-[#6378bb]",
            styleSchedule: "bg-[#6378bb] hover:bg-[#4d5c8c]",
            link: "/softwares/wms"
            },
            {
                id: 3,
                img: "/assets/images/Products/scm.svg",
                description: "Cloud Tenants SCM+ (Supply Chain Management) solution offers end-to-end Supply Chain Cycle. This module oversees the Procurement, Inventory, and Distribution of Materials and Products, as well as the management of Vendors and Suppliers..",
                gridImg: "/assets/images/Products/scmgrid.png",
                styleRead: "text-[#c47ece] border-[#c47ece] hover:ring-[#c47ece]",
                styleSchedule: "bg-[#c47ece] hover:bg-[#A663C1]",
                link: "/softwares/scm" 
            },
            {
                id: 4,
                img: "/assets/images/Products/hcm.svg",
                description: "Cloud Tenants HCM+ (Human Capital Management) solutions offers end-to-end Employee Lifecycle Management. t manages Recruitment, Detailed HR Information, Time & Attendance, Payroll and other processes..",
                gridImg: "/assets/images/Products/hcmgrid.png",
                styleRead: "text-[#1798a7] border-[#1798a7] hover:ring-[#1798a7]",
                styleSchedule: "bg-[#1798a7] hover:bg-[#00818F] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none",
                link: "/softwares/hcm" 
            },
            {
                id: 5,
                img: "/assets/images/Products/finance.svg",
                description: "Cloud tenants Finance+ Module manages the Financial transactions and Accounting activities, including General Ledger, Accounts Payable, Accounts Receivable, Cash Management, Fixed Assets Management..",
                gridImg: "/assets/images/Products/financegrid.png",
                styleRead: "text-[#CDDC39] border-[#CDDC39] hover:ring-[#CDDC39]",
                styleSchedule: "bg-[#CDDC39] hover:bg-[#bbc63f]", 
                link: "/softwares/finance"
            },
         
            {
                id: 6,
                img: "/assets/images/Products/production.svg",
                description: "Cloud Tenants Production+ Module is an excellent software module for businesses engaged in production of various goods.It Automates & Optimizes Planning, Scheduling, Inventory Management, Quality Control and Real Time Reporting for effective production management..",
                gridImg: "/assets/images/Products/productiongrid.png",
                styleRead: "text-[#4C8EDF] border-[#4C8EDF] hover:ring-[#4C8EDF]",
                styleSchedule: "bg-[#4C8EDF] hover:bg-[#4179BE] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none",
                link: "/softwares/production"
            },
            {
                id: 7,
                img: "/assets/images/Products/import.svg",
                description: "Cloud Tenants Import+ module manages Landed Cost Tracking, Duty and Taxes, LC Opening/Arrival and Import Good Received Note (GRN) and others..",
                gridImg: "/assets/images/Products/importgrid.png",
                styleRead: "text-[#105AB6] border-[#105AB6] hover:ring-[#105AB6]",
                styleSchedule: "bg-[#105AB6] hover:bg-[#173860] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none",
                link: "/softwares/import" 
            },
            {
                id: 8,
                img: "/assets/images/Products/primary.svg",
                description: "Cloud Tenants Primary Sales Module provides end-to-end Sales operations management directly between manufacturer/importer and customer. It covers receiving Order from customer to delivery of order to customer..",
                gridImg: "/assets/images/Products/primarygrid.png",
                styleRead: "text-[#00ccff] border-[#00ccff] hover:ring-[#00ccff]",
                styleSchedule: "bg-[#00ccff] hover:bg-[#00add9] text-white transition-all duration-300 text-xs hover:text-sky-100 rounded-lg px-5 py-2 mr-2 font-medium focus:outline-none",
                link: "/softwares/primary" 
            },        
        ]
          }
]