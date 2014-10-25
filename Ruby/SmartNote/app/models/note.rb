class Note < ActiveRecord::Base
  has_many :comments, dependent: :destroy

  validates :title, presence: true, length: {minimum: 3}

  scope :published, -> { where(publish: true) }
  scope :recent, -> {order('created_at desc')}

  before_save :print_out

  def print_out
    puts self.title
  end
end
