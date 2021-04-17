const pastWorks = {
    'Ganado Control': "<b>Date</b>: Dec 2020<br/>\
                <b>Role</b>: FullStack Developer. <br/>\
                <b>Technologies</b>: Python, Django, HTML, CSS, Nginx, Linux. <br/>\
                <b>Summary</b>: This project allows to record livestock, inventory, and \
                consumptions. Finally, reports show the product’s quantities used in each \
                livestock and the growth progress.",
    'Ecuadorian Human Resources localization Odoo': "<b>Date</b>: Apr - Nov 2020<br/>\
                <b>Role</b>: Odoo Developer.<br/>\
                <b>Technologies</b>: Python, XML, Postgres, Linux.<br/>\
                <b>Summary</b>: This module is a personalization of the community human\
                resources Odoo modules (employees, contracts, attendance, holidays\
                and payslip) to follow the actual Ecuadorian Jobs Law.",
    'Simple Tracker':"<b>Date</b>: Nov - Dec 2020<br/>\
                        <b>Role</b>: Frontend Developer.<br/>\
                        <b>Technologies</b>: ReactJS, Google maps API.<br/>\
                        <b>Summary</b>: This project is a simple MVP to track vehicle trips for a shrimp\
                        company. The trip was assigned and reported on a Web application using\
                        ReactJS and integrated with Google Maps API, The coordinates (lat, lon)\
                        was captured using an app installed on a mobile device. Both applications\
                        were served by an API REST project developed using Django.",
    'Agricultural Odoo module':"<b>Date</b>: July 2019 - March 2020<br/>\
                <b>Role</b>: Odoo Developer.<br/>\
                <b>Technologies</b>: Python, XML, Postgres, Linux.<br/>\
                <b>Summary</b>: This module consists of representing the whole process of\
                agricultural labor realized by employees on farms, defining labor’s rates,\
                computing the total amount to pay for each employee, and integrating this\
                total on the payslip.",
    'MRP Odoo module':"<b>Date</b>: Feb 2019 - June 2019<br/>\
                <b>Role</b>: Odoo Developer.<br/>\
                <b>Technologies</b>: Python, XML, Postgres, Linux.<br/>\
                <b>Summary</b>: This module allows recording the whole process of plastic\
                industries, generating personalize and unique labels for each production\
                batch, and reporting the status and efficiency of production orders. Also,the module has been integrated with the Inventory module to allow\
                multiple validations on record raw material consumptions and final\
                product produced.",
    'CRM Odoo module':"<b>Date</b>: Sep 2018 - Jan 2019<br/>\
                <b>Role</b>: Odoo Developer.<br/>\
                <b>Technologies</b>: Python, XML, Postgres, Linux, Prontoforms.<br/>\
                <b>Summary</b>: This module is a personalization of the CRM Odoo community\
                module to allow multiple sales funnels and differentiates between new\
                and past customers. Also, this module was integrated with Prontoforms to\
                record activities realized by sales teams using their mobile devices.",
    'Inventory Control':"<b>Date</b>: Aug - Dec 2018<br/>\
                <b>Role</b>: Backend Developer.<br/>\
                <b>Technologies</b>: Larabel 5, Php, ReactJS.<br/>\
                <b>Summary</b>: Restful API developed in Laravel 5 as a server for mobile and\
                web applications to control and rec",
    'TransportesCJRobles':"<b>Date</b>: Dec 2017 - July 2018<br/>\
                <b>Role</b>: Fullstack Developer.<br/>\
                <b>Technologies</b>: Python, Django, HTML, CSS, BackboneJS, Postgres, \
                Nginx, Linux.<br/>\
                <b>Summary</b>: Web and Mobile application to control the transport of\
                AVIANCA personnel in the city of Guayaquil. The Backend was\
                developed using Python with Django like a framework, the frontend was\
                developed using BackboneJS, and driver and user apps were native\
                applications.",
    'Ecommerce':"<b>Date</b>: Oct 2017 - Aug 2018<br/>\
                <b>Role</b>: Fullstack Developer.<br/>\
                <b>Technologies</b>: Django Oscar, Python, Linux, HTML, CSS, Javascript<br/>\
                <b>Summary</b>: The project was an Ecommerce that supports B2B and B2C\
                Marketing. It was based on the Open Source project Django Oscar. The\
                Project had external integrations with SRI for invoicing, and with Kushki\
                as a payment method using JavaScript.",
    'ControlAC Project':"<b>Date</b>: Feb - Apr 2017<br/>\
                <b>Role</b>: Fullstack Developer.<br/>\
                <b>Technologies</b>: Php, Symfony, Xampp.<br/>\
                <b>Summary</b>: Web application to control clases’s progress at ESPOL,\
                following the Syllabus.",
    'Kishwar':"<b>Date</b>: Sep - Jan 2016<br/>\
                <b>Role</b>: Arduino developer<br/>\
                <b>Technologies</b>: Arduino.<br/>\
                <b>Summary</b>: This project was a prototype of a smart and reactive signage\
                that connects different kinds of sensors (smoke, fire or gas sensors) in\
                different places to find the best route to escape, and it communicates\
                using Arduino and Xbee technologies to light up smart leds .",
};

$('#detailsModal').on('show.bs.modal', function (event) {
    let div = $(event.relatedTarget);
    let title = div.data('title');
    let modal = $(this);
    let titleDiv = modal.find('.modal-title');
    titleDiv.empty();
    titleDiv.append("<b>" + title + "</b>");
    let body = modal.find('.modal-body');
    body.empty();
    body.append(pastWorks[title]);
})