import utils from './utils';

export default class BaseController {
	constructor(file,args,bindToThis){
		if (!this._debug)
			utils.initializeDebug(this,file,this.constructor.name,bindToThis)

		if (args)
			utils.applyArguments(this,this.constructor,args);

		this._debug('__init')
	}
}
