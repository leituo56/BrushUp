class CommentsController < ApplicationController

  # POST /notes/:note_id/comments
  def create
    @note = Note.find(params[:note_id])
    @comment = @note.comments.create(comment_params)
    redirect_to @note
  end


  # DELETE /notes/:note_id/comments/:id
  def destroy
    @note = Note.find(params[:note_id])
    @comment = @note.comments.find(params[:id])
    @comment.destroy
    redirect_to @note
  end

  private
    # Never trust parameters from the scary internet, only allow the white list through.
    def comment_params
      params.require(:comment).permit(:commenter, :body)
    end
end
