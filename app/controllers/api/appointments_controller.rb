class Api::AppointmentsController < ApplicationController
  before_action :set_appointment, only: [:show, :destroy]
  
  def index
    appointments = Appointment.all_plus
    render json: appointments
  end

  def show
    render json: @appointments
  end

  def create
    @appointment = Appointment.new(appointment_params)
    if @appointment.save
      render json: @appointment
    else
      render json: {error: @appointment.errors}, status: 422
    end
  end

  def destroy
    @appointment.destroy
    render json: @appointment
  end

  private

  def set_appointment
    @appointment = Appointment.find(params[:id])
  end

  def appointment_params
    params.require(:appointment).permit(:time, :patient_id, :doctor_id)
  end

end
