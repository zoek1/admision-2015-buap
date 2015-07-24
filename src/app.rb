require 'cuba'
require 'cuba/assets'
require 'cuba/render'
require 'haml'
require 'csv'

Cuba.plugin Cuba::Assets
Cuba.plugin Cuba::Render

Cuba.settings[:render][:template_engine] = "haml"

Cuba.define do
  on root do
    prepa = CSV.read("datasets/prepas.csv")
    res.write partial("index", {:prepa => prepa})
  end

  on 'assets/:path' do |path|
    res.write asset(path)
  end
end
