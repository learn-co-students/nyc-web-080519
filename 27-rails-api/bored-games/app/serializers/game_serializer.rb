class GameSerializer < ActiveModel::Serializer
  attributes :id, :name, :img_url, :likes, :description, :slug


  def slug
    object.name.downcase.gsub(/\s/, "_")
  end

end
