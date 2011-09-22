(function() {
  var Jitskills;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Jitskills = (function() {
    __extends(Jitskills, Batman.App);
    function Jitskills() {
      Jitskills.__super__.constructor.apply(this, arguments);
    }
    Jitskills.set('skill', 'javascript');
    Jitskills.global(true);
    Jitskills.controller('app', 'skills');
    Jitskills.model('Skill');
    Jitskills.root('skills#index');
    return Jitskills;
  })();
}).call(this);
