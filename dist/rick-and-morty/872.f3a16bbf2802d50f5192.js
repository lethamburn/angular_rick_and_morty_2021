"use strict";(self.webpackChunkrick_and_morty=self.webpackChunkrick_and_morty||[]).push([[872],{872:(h,n,i)=>{i.r(n),i.d(n,{EpisodesModule:()=>m});var p=i(583),d=i(855),s=i(639),r=i(841);let c=(()=>{class e{constructor(o){this.httpClient=o}getEpisodes(){return this.httpClient.get("https://rickandmortyapi.com/api/episode")}}return e.\u0275fac=function(o){return new(o||e)(s.LFG(r.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function u(e,t){if(1&e&&(s.TgZ(0,"div",2),s.TgZ(1,"h2"),s.TgZ(2,"span"),s._uU(3),s.qZA(),s._uU(4),s.qZA(),s.TgZ(5,"p"),s._uU(6," Air Date: "),s.TgZ(7,"span"),s._uU(8),s.qZA(),s.qZA(),s.qZA()),2&e){const o=t.$implicit;s.xp6(3),s.hij("",o.id,":"),s.xp6(1),s.hij(" ",o.name,""),s.xp6(4),s.Oqu(o.air_date)}}const a=[{path:"",component:(()=>{class e{constructor(o){this.episodesService=o,this.episodesList=[]}ngOnInit(){this.episodesService.getEpisodes().subscribe(o=>{this.episodesList=o.results,console.log("API EPISODES:",this.episodesList)})}}return e.\u0275fac=function(o){return new(o||e)(s.Y36(c))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-episodes"]],decls:4,vars:1,consts:[[1,"episodes"],["class","episodes__card",4,"ngFor","ngForOf"],[1,"episodes__card"]],template:function(o,E){1&o&&(s.TgZ(0,"div",0),s.TgZ(1,"h1"),s._uU(2,"Episodes"),s.qZA(),s.YNc(3,u,9,3,"div",1),s.qZA()),2&o&&(s.xp6(3),s.Q6J("ngForOf",E.episodesList))},directives:[p.sg],styles:[""]}),e})()}];let l=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[d.Bz.forChild(a)],d.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[p.ez,l]]}),e})()}}]);