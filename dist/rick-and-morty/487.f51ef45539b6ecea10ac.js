"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[487],[(P,a,o)=>{o.r(a),o.d(a,{PlanetsModule:()=>d});var l=o(583),i=o(855),t=o(639),r=o(841);let c=(()=>{class n{constructor(e){this.httpClient=e}getPlanets(){return this.httpClient.get("https://rickandmortyapi.com/api/location")}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(r.eN))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function p(n,s){if(1&n&&(t.TgZ(0,"div",2),t._UZ(1,"img",3),t.TgZ(2,"h2"),t._uU(3),t.qZA(),t.TgZ(4,"p"),t._uU(5," Type: "),t.TgZ(6,"span"),t._uU(7),t.qZA(),t.qZA(),t.TgZ(8,"p"),t._uU(9," Dimensions: "),t.TgZ(10,"span"),t._uU(11),t.qZA(),t.qZA(),t.qZA()),2&n){const e=s.$implicit;t.xp6(3),t.Oqu(e.name),t.xp6(4),t.Oqu(e.type),t.xp6(4),t.Oqu(e.dimension)}}const u=[{path:"",component:(()=>{class n{constructor(e){this.planetsService=e,this.planetsList=[]}ngOnInit(){this.planetsService.getPlanets().subscribe(e=>{this.planetsList=e.results,console.log("API PLANETS:",this.planetsList)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-planets"]],decls:4,vars:1,consts:[[1,"planets"],["class","planets__card",4,"ngFor","ngForOf"],[1,"planets__card"],["src","../../../assets/images/planet.gif","alt","planet Portrait"]],template:function(e,g){1&e&&(t.TgZ(0,"div",0),t.TgZ(1,"h1"),t._uU(2,"Planets"),t.qZA(),t.YNc(3,p,12,3,"div",1),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngForOf",g.planetsList))},directives:[l.sg],styles:[""]}),n})()}];let m=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[i.Bz.forChild(u)],i.Bz]}),n})(),d=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[l.ez,m]]}),n})()}]]);