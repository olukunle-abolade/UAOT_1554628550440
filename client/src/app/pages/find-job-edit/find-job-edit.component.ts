/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5ca6fb6b3e3a575750171757
*
* You will get 10% discount for each one of your friends
* 
*/
// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { FindJobService } from '../../services/find-job.service';
// Import Models
import { FindJob } from '../../domain/uaot_db/find-job';

// START - USED SERVICES
/**
* FindJobService.create
*	@description CRUD ACTION create
*
* FindJobService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id 
*
* FindJobService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a FindJob
 */
@Component({
    selector: 'app-find-job-edit',
    templateUrl: 'find-job-edit.component.html',
    styleUrls: ['find-job-edit.component.css']
})
export class FindJobEditComponent implements OnInit {
    item: FindJob;
    model: FindJob;
    formValid: Boolean;

    constructor(
    private findjobService: FindJobService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new FindJob();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.findjobService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save FindJob
     *
     * @param {boolean} formValid Form validity check
     * @param FindJob item FindJob to save
     */
    save(formValid: boolean, item: FindJob): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.findjobService.update(item).subscribe(data => this.goBack());
            } else {
                this.findjobService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}


