class Jitskills extends Batman.App
  @set 'skill', 'javascript'
  
  # Make Jitskills available in the global namespace so it can be used
  # as a namespace and bound to in views.
  @global yes

  # Source the AppController and set the root route to AppController#index.
  @controller 'app', 'skills'
  @model 'Skill'
  @root 'skills#index'

