class LightEl{

  constructor(selector, config){

    // this.init(selector, config);

  }

  init(selector, config){
    if(!this.dconf) this.dconf = {
      selector: 'lel'
    }
    var conf = config || {};
    if(selector) conf.selector = selector;
    this.conf = this.getConf(conf);

    this.els = this.getEls();

  }
  getConf(config){
    if(!config) return this.dconf;
    return Object.assign( this.dconf, config );
  }
  getEls(){
    return document.getElementsByClassName( this.conf.selector ) || document.getElementsByClassName( this.dconf.selector );
  }

}
