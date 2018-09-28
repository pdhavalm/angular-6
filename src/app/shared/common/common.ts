import { Injectable } from '@angular/core';

@Injectable()

export class Common {
    isEmpty(str: string): boolean {
        return str === undefined || str === null || str === '';
    }

    isValidEmailAddress(emailAddress) {
        const filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return filter.test(emailAddress);
    }

    YesNoClass(flag: boolean) {
        return flag === true ? 'label-success' : 'label-danger';
    }
}



