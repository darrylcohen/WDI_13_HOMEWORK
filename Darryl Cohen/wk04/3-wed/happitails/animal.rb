class Animal

  def initialize name, age, gender, species
    @name = name
    @age = age
    @gender = gender
    @species = species
    @toys = []
  end

  def get_name
    @name
  end

  def to_s
    "#{@name}. I am #{@age} and am a #{@gender} #{@species}. "
  end

end
