class Jitskills.SkillsController extends Batman.Controller
  emptySkill: null
  index: ->
     @set 'emptySkill', new Skill( name: 'coffeescript' )
  create: =>
     @emptySkill.save( (error, record) =>
       throw error if error
     )
     @set 'emptySkill', new Skill


# Add actions to this controller by defining functions on it.
  #
  # show: (params) ->

  # Routes can optionally be declared inline with the callback on the controller:
  #
  # edit: @route('/jitskills/:id', (params) -> ... )

  # Add functions to run before an action with
  #
  # @beforeFilter 'someFunctionKey'  # or
  # @beforeFilter -> ...
