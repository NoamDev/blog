Jekyll::Hooks.register :site, :post_render do |site|
	Jekyll.logger.info "Jekyll Math Feed:", "Creating mirror feed with math"
	feed_config = site.config['feed'] || {}
	feed_path = feed_config['path']
	feed = site.pages.detect {|page| page.name == '/feed.xml'}
	feed_xml = feed.output
	math_feed_xml = feed_xml.gsub(/\$latex ([^\$]*)\$/){|match| generate_svg $1}
	site.pages << make_page(site, '/math_feed.xml', math_feed_xml)
end

# The following two functions are based on jekyll-feed code.
# Look at github.com/jekyll-feed/jekyll-feed for license and copyrights
class PageWithoutAFile < Jekyll::Page
	def read_yaml(*)
	  @data ||= {}
	end
end

def generate_svg(latex)
	"<img src=\"http://latex.codecogs.com/png.latex?#{latex}\" alt=\"#{latex}\" />"
end

def make_page(site, file_path, output)
  PageWithoutAFile.new(site, __dir__, "", file_path).tap do |file|
	file.output = output
  end
end