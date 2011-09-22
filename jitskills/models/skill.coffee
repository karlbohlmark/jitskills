class Skill extends Batman.Model
    @persist Batman.LocalStorage
    @global true
    @encode 'name', 'likes'
    @encode 'created_at', 'updated_at'
      encode: (time) -> time.toISOString()
      decode: (timeString) -> Date.parse(timeString)
###
    @encode 'tags',
      encode: (tagSet) -> tagSet.toArray().join(', ')
      decode: (tagString) -> new Batman.Set(tagString.split(', ')
###
