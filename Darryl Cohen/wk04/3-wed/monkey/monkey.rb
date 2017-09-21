class Monkey

  attr_reader :name

  def initialize name, species
    @name = name
    @species = species
    @foods_eaten = []
  end
  # def name
  #   @name
  # end
  #
  # def name=(value)
  #   @name = value
  # end

  def eat food
    @foods_eaten.push food
  end

  def introduce
    "Hello. My name is #{@name}, my species is #{@species}. I had #{@foods_eaten.join(' and ')} for brunch"

  end

end
